

DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS ServiceTicket;
DROP TABLE IF EXISTS EmployeeTicket;
-- End block


-- Run this block to create the tables and seed them with some initial data
CREATE TABLE `User` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`full_name`	TEXT NOT NULL,
	`email` TEXT NOT NULL,
    `isStaff` BOOLEAN
);

CREATE TABLE `Customer` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`address`	TEXT NOT NULL,
	`phone_number` TEXT NOT NULL,
    `user_id` INTEGER NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `User`(`id`)
);

CREATE TABLE `Employee` (
	`id`  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`specialty`  TEXT NOT NULL,
	`rate` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `User`(`id`)
);

CREATE TABLE `ServiceTicket` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `description` TEXT NOT NULL,
    `emergency` BOOLEAN,
    `rate` FLOAT NOT NULL,
    `user_id` INTEGER NOT NULL,
    FOREIGN KEY(`user_id`) REFERENCES `User`(`id`)
);

CREATE TABLE `EmployeeTickets` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `employeeId` INTEGER NOT NULL,
    `serviceTicketId` INTEGER NOT NULL,
    FOREIGN KEY(`employeeId`) REFERENCES `Employee`(`id`),
    FOREIGN KEY(`serviceTicketId`) REFERENCES `ServiceTicket`(`id`)
);

INSERT INTO `User` VALUES (null, "Dion Stoade", "dstoade0@cornell.edu", false);
INSERT INTO `User` VALUES (null, "Windy Thorneloe", "wthornloe1@usa.gov", false);
INSERT INTO `User` VALUES (null, "Millie Phillpotts", "hphillpotts2@rakuten.co.jp", false);
INSERT INTO `User` VALUES (null, "Helenelizabeth Passfield", "hpassfield@netvibes.com", true);

INSERT INTO `Customer` VALUES (1, "2802 Zula Locks", "852-837-9713", 2);
INSERT INTO `Customer` VALUES (2, "568 Fadel Gateway", "202-244-7090", 1);
INSERT INTO `Customer` VALUES (3, "161 Wessington Place", "865-266-0357", 3);

INSERT INTO `Employee` VALUES (1, "Macbooks", 110, 4);
INSERT INTO `Employee` VALUES (2, "Apple Repair", 97.39, 5);
INSERT INTO `Employee` VALUES (3, "Printer Repair", 29.45, 6);
INSERT INTO `Employee` VALUES (4, "TikTok", 85.62, 7);

INSERT INTO `ServiceTicket` VALUES (1, "Broken Screen on Macbook", 1, 0, 4);
INSERT INTO `ServiceTicket` VALUES (2, "Xbox has red ring of death", 1, 0, 3);
INSERT INTO `ServiceTicket` VALUES (3, "Dropped iPhone in toilet", 1, 0, 2);
INSERT INTO `ServiceTicket` VALUES (4, "Desktop wont turn on", 0, 0, 1);
INSERT INTO `ServiceTicket` VALUES (5, "Speaker phone does not work on iPhone", 1, 0, 3);
INSERT INTO `ServiceTicket` VALUES (6, "Airpods wont connect", 0, 0, 2);
INSERT INTO `ServiceTicket` VALUES (7, "Router is broken", 1, 0, 2);
INSERT INTO `ServiceTicket` VALUES (8, "TikTok will not load", 1, 0, 7);
INSERT INTO `ServiceTicket` VALUES (9, "My phone will not turn on ", 1, 0, 3);
INSERT INTO `ServiceTicket` VALUES (10, "Computer has diabetes", 0, 0, 3);

INSERT INTO `EmployeeTickets` VALUES (3, 1, 4);
INSERT INTO `EmployeeTickets` VALUES (4, 2, 2);
INSERT INTO `EmployeeTickets` VALUES (6, 2, 7);
INSERT INTO `EmployeeTickets` VALUES (8, 4, 8);
INSERT INTO `EmployeeTickets` VALUES (9, 1, 5);
INSERT INTO `EmployeeTickets` VALUES (10, 1, 6);
INSERT INTO `EmployeeTickets` VALUES (11, 1, 3);