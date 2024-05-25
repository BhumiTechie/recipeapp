import { toast } from "react-toastify";
import { addRecipe } from "../store/Reducers/recipeSlice";

export const asyncgetrecipe = () => async(dispatch, getState)=>{
	 try {
		let data = JSON.parse(localStorage.getItem("recipes")) || [];
		dispatch(addRecipe(data));
	 } catch (error) {
		 toast.error(error);
	 }
}