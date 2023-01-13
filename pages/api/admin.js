// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAdminById } from "../../lib/model/admin"

export default async function handler(req, res) {
  const admin = await getAdminById(0);
  res.status(admin == null ? 404 : 200).json({ item: admin })
}
