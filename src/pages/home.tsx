import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu";
import { items } from "../constants/menuItem";

export default function Home() {
  return (
    <div className={`h-screen`}>
      <InfiniteMenu items={items} />
    </div>
  )
}