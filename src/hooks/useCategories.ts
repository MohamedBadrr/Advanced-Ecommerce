import {
  actGetCategories,
  cleanupCategories,
} from "@/store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
const useCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, error, loading } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!categories.length) {
  const promise = dispatch(actGetCategories());
      return () => {
        dispatch(cleanupCategories());
        promise.abort()
      };
    }
  }, [dispatch, categories.length]);
  return { categories, error, loading };
};

export default useCategories;
