
// import { api } from "./AxiosInstance";
// import { User } from "../../core/entities/User";
// import { toast } from "sonner";


// export const UserService = {
//   getAll: async (): Promise<User[]> => (await api.get("/users")).data,

// //   create: async (user: User): Promise<User> => (await api.post("/users", user)).data,
// //   update: async (user: User): Promise<User> => (await api.put(`/users/${user.id}`, user)).data,
//   delete: async (id: string): Promise<void> => {
//     if(!id) {
//       toast.error("User ID is required for deletion");
//     }
//     await api.delete(`/users/${id}`);
//   },
// };