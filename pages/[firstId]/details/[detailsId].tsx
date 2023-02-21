import { useRouter } from "next/router"

export default function DetailsId() {
    const router = useRouter()
    const detailId = router.query.detailsId
  return (
    <div>{detailId}</div>
  )
}
