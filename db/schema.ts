import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("imie i nazwisko").notNull(),
  email: varchar("email").unique().notNull(),
  picture: text("zdjecie").notNull(),
});
export const Consultation = pgTable("consultation", {
  id: serial("id").primaryKey(),
  name: varchar("imie i nazwisko").notNull(),
  product_name: varchar("nazwa produktu").notNull(),
  email: varchar("email").notNull(),
  pay_id: text("id płatności").notNull(),
  pay_verified: boolean("Płatność sprawdzona").default(false),
});
