import FavoriteCityElement from "./FavoriteCityElement";


function FavoritesPanel(
	{ } 
) {

    const  allStorage = () => {

        var archive = {}, // Notice change here
            keys = Object.keys(localStorage),
            i = keys.length;

        while ( i-- ) {
            archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));
        }

        return archive;
    }
    const itemsStorage = allStorage();
    
       

    return (<>
        <div className="grid grid-cols-2 gap-4 mt-5">
            {itemsStorage !== null ? 
                
                Object.keys(itemsStorage).map((item, index) => {
                    return <FavoriteCityElement data={itemsStorage[item].data[0]} key={index}/>
                    
            })
                
            : <h2>Añade ciudades favoritas a tu app</h2>}
         </div>  
    </>);
}



export default FavoritesPanel;