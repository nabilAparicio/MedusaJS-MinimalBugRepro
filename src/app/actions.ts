'use server'

import { medusaClient } from "@/util/config"

export const getProducts = async () =>{
  const { products, count } = await medusaClient.products
      .list()
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
        throw err
      })

  return { products, count }
}