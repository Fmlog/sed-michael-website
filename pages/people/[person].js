import { useRouter } from "next/router";
import Staff from "../../components/Staff";
function people() {
  const router = useRouter();
  const {person} = router.query;
  return (<Staff person={person}/>);
}

export default people;
