import { Pool } from "pg";

const pool = new Pool();
//@ts-ignore
export const query = (text, params) => pool.query(text, params);
