import axios from "axios";
import { AuthRepo } from "./AuthRepo";

class TagRepoImpl {
    token = AuthRepo.getToken()

    async getAllTag() {
        return await axios.get('https://devel0-filkom.ub.ac.id/tag',
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
    }
}

export const TagRepo = new TagRepoImpl()