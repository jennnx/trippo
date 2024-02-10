import { pgTable, text, integer, jsonb, timestamp } from "drizzle-orm/pg-core";

export const trips = pgTable("trips", {
    id: text("id").primaryKey(),
    city: text("city").notNull(),
    country: text("country").notNull(),
    descriptionShort: text("description_short").notNull(),
    imageUrl: text("image_url").notNull(),
    descriptionLong: text("description_long").notNull(),
    flightMin: integer("flight_min").notNull(),
    flightMax: integer("flight_max").notNull(),
    flightTime: text("flight_time").notNull(),
    hotel3: integer("hotel_3").notNull(),
    hotel4: integer("hotel_4").notNull(),
    hotel5: integer("hotel_5").notNull(),
    tip: text("tip").notNull(),
    itinerary: jsonb("itinerary").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Trip = typeof trips.$inferSelect;
