import { useRouter } from "next/router";
import { Button, Result } from "antd";
import Link from "next/link";
import { useEffect } from "react";


const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default ErrorPage;
