import styles from "@/styles/Home.module.css";
import useUser from "@/hooks/useUser";
import Navbar from "@/components/Navbar";

export default function Home() {
  const user = useUser();
  console.log(user);;

  return (
    <>
      <Navbar />
      <div>
      
      </div>
    </>
  );
}
