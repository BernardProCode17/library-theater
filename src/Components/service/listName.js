//Remove the '_' from the listing name where there is two words

function listName(listname){
return listname.replace(/_/g, ' ');

}

export default listName;