import axios from "axios"
import { AuthRepo } from "./AuthRepo"

class PostRepoImpl {
    token = AuthRepo.getToken()

    async getAllPostAdminByPage(
        page
    ) {
        return await axios.get(`https://devel0-filkom.ub.ac.id/post-admin?page=${page}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
    }
}

export const PostRepo = new PostRepoImpl()