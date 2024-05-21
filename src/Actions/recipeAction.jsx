import { toast } from "react-toastify";
import {addrecipe} from '../store/Reducers/recipeSlice';

export const asyncgetrecipe = () => async(dispatch, getState)=>{
	 try {
		let data = JSON.parse(localStorage.getItem("recipes")) || [];
		dispatch(addrecipe(data));
	 } catch (error) {
		 toast.error(error);
	 }
}