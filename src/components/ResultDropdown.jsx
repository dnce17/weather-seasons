import { removeBlanks } from "../../helpers";

const ResultDropdown = ({ setLocationData, setQuery, filteredResults, setSubmit }) => {
	return (
		<>
			{filteredResults.length > 0 && (
				<div className='absolute w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg z-10'>
					{filteredResults.map((location, index) => (
						<div
							key={index}
							className='px-4 py-2 cursor-pointer hover:bg-gray-100'
							onMouseDown={(e) => {
								// Set query to the clicked item's name
								setQuery(`${removeBlanks([location.name, location.admin1, location.country])}`);
								setLocationData(location);
								setSubmit();
							}}
						>
							{removeBlanks([location.name, location.admin1, location.country])}
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default ResultDropdown;