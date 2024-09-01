import PrivetRoutes from "../../conmponents/PrivetRoutes/PrivetRoutes";
import UserProfile from "./UserProfile/UserProfile";

const UpdateProfileLayout = () => {
  return (
    <div>
      <PrivetRoutes>
        <UserProfile></UserProfile>
      </PrivetRoutes>
    </div>
  );
};

export default UpdateProfileLayout;
