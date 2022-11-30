import { useRouter } from "next/router";

export default function ProductDetail() {
    const routes = useRouter();
    const { id } = routes.query;
    return (
        <div>
            <h1>Product Detail {id}</h1>
        </div>
    );
}
