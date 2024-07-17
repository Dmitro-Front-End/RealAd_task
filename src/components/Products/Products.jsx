"use client";
import S from "./style.module.css";
import { getProductsApi } from "@/api/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getProductsApi();
      if (response.status === 200) {
        setProducts(response.data);
        NotificationManager.success("Success", "Title here");
      } else NotificationManager.error("Error message", "Click me!");
    } catch (error) {
      NotificationManager.error("Error message", "Click me!", 5000);
    }
    setIsLoading(false);
  }, []);

  const productsMemo = useMemo(
    () =>
      products.map((el) => (
        <ul key={el.id}>
          <li>{el.title}</li>
        </ul>
      )),
    [products]
  );

  return (
    <div>
      {/* loading */}
      <div className={S.spinDiv}>
        <ColorRing
          visible={isLoading}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>

      {/* list */}
      {productsMemo}

      {/* notification  */}
      <NotificationContainer />
    </div>
  );
};
