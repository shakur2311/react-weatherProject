import React, {useState} from 'react';

const SearchComponent = ({callWeatherApi,setIsLoading}) => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <div className='d-flex justify-content-around'>
            <label htmlFor="searchInput" className='color-black h4'>Ciudad</label>
            <input name="searchInput" id="searchInput" type="text" className='form-control w-50' value={searchInput}
             onChange={(e)=>setSearchInput(e.target.value)}/>
             <button className='btn btn-primary' onClick={()=>{
                callWeatherApi(searchInput)
                setIsLoading(true)}}>Buscar</button>
        </div>
    );
}

export default SearchComponent;
