function canNest(arr1, arr2) {
	const ar1max = Math.max(...arr1); 
	const ar1min = Math.min(...arr2);
	const ar2max = Math.max(...arr1);
	const ar2min = Math.min(...arr2);
	
	if(arr1max < arr2max && arr1min > arr2min){
		return true;
	}else{
		return false;
	}
}