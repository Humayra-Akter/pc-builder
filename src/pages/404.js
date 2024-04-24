import { useRouter } from "next/router";
import { Button, Result } from "antd";
import Link from "next/link";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
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
