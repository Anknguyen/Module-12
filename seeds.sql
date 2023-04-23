INSERT INTO `module12`.`department`
(`id`, `name`) VALUES (1,"Department 1");

INSERT INTO `module12`.`department`
(`id`, `name`) VALUES (2,"Department 2");

INSERT INTO `module12`.`role`
(`id`, `title`, `salary`, `department_id`) VALUES (1, "Role 1", 80000, 1);

INSERT INTO `module12`.`role`
(`id`, `title`, `salary`, `department_id`) VALUES (2, "Manager", 500000, 2);

INSERT INTO `module12`.`employee`
(`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES (1, "An", "Nguyen", 2, null);

INSERT INTO `module12`.`employee`
(`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES (2, "Steven", "Ferrel", 1, 1);
