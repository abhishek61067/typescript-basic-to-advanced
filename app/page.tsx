import Child from "@/components/children/Child";
import Parent from "@/components/children/Parent";

export default function Home() {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}
