import React, { Suspense, lazy } from "react";
import Spiner from "./Spinner";
import toast from "react-hot-toast";

const LazyComponent = ({
  importComponent,
  Loading = () => <Spiner />, // 自定义加载组件
  Error = ({ error }) => toast.error("error"), // 自定义错误组件
  ...props
}) => {
  try {
    const LazyComp = lazy(importComponent);
    return (
      <Suspense fallback={<Loading />}>
        <LazyComp {...props} />
      </Suspense>
    );
  } catch (error) {
    return <Error error={error} />;
  }
};

export default LazyComponent;
