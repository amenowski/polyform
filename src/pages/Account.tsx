import Container from "../components/layout/Container";
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";

export default function Account() {
  const { user } = useUser();
  const { logout } = useLogout();

  console.log(user);
  return (
    <Container className="min-h-[40rem] py-6">
      <div className="border-b py-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-essentialBackground1"></div>
          <div>
            <h2 className="text-3xl font-bold">
              {user?.user_metadata.name} {user?.user_metadata.lastName}
            </h2>
            <span
              onClick={() => logout()}
              className="cursor-pointer text-sm transition-all duration-300 hover:border-b hover:border-b-black"
            >
              Logout
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="w-1/2 rounded-lg border p-8">
          <h3 className="text-xl">Update user password</h3>
          <UpdatePasswordForm />
        </div>
        <div></div>
      </div>
    </Container>
  );
}
