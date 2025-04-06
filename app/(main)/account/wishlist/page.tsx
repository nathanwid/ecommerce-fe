import Wishlist from "@/components/account/Wishlist";

export default async function page() {
  return (
    <>
      <h1 className="text-2xl mb-8 font-bold">My Wishlist</h1>
      <Wishlist />
    </>
  );
}
