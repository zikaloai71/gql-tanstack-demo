import React from "react";
import { useForm } from "react-hook-form";
// import { useUserQueries } from "../../../infrastructure/hooks/useUserQueries";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../../../core/entities/User";

export const UserForm: React.FC = () => {
//   const { useCreateUser, useUpdateUser } = useUserQueries();
//   const createUserMutation = useCreateUser();
//   const updateUserMutation = useUpdateUser();
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit } = useForm<User>();

  const onSubmit = (data: User) => {
    // if (id) {
    //   updateUserMutation.mutate({ ...data, id });
    // } else {
    //   createUserMutation.mutate(data);
    // }
    console.log(data);
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <button type="submit">{id ? "Update User" : "Create User"}</button>

    </form>
  );
};
