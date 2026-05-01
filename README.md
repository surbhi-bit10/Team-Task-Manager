================================================================
  TASKFLOW — TEAM TASK MANAGER
  README
================================================================

OVERVIEW
--------
TaskFlow is a single-file, browser-based team task management
application. It provides a full-featured workspace for managing
projects, tasks, and team members — with no server, database,
or build tools required. Simply open the HTML file in any
modern browser to get started.


GETTING STARTED
---------------
1. Download or locate the file: team_task_manager_fullstack.html
2. Open it in any modern web browser (Chrome, Firefox, Edge,
   Safari).
3. Log in using one of the demo accounts listed below.

No installation, npm install, or server setup needed.


DEMO ACCOUNTS
-------------
Role    | Email              | Password
--------|--------------------|----------
Admin   | admin@demo.com     | admin123
Member  | sarah@demo.com     | member123
Member  | mike@demo.com      | member123
Member  | priya@demo.com     | member123

You can also create a new account via the Sign Up tab on the
login screen.


FEATURES
--------
Dashboard
  - Summary statistics: total tasks, completed, in-progress,
    overdue counts.
  - Quick overview of recent tasks and active projects.
  - Personalized greeting based on logged-in user.

My Tasks
  - Filterable list of tasks assigned to the current user.
  - Filter by status: All, To Do, In Progress, Review, Done.
  - Inline search by task title.
  - Quick status toggle (mark complete/incomplete).
  - Overdue tasks highlighted in red.

Projects
  - Card view of all projects the user belongs to.
  - Progress bar per project (% of tasks completed).
  - Member avatars and task counts per project.
  - Click into any project to see its Kanban board and task list.

Project Detail
  - Kanban board view: To Do / In Progress / Review / Done columns.
  - Full task list with sorting and filtering.
  - Admin controls to edit or delete the project.

Team Members (Admin only)
  - Table of all registered users with roles and task counts.
  - Invite new members with name, email, password, and role.
  - View or remove existing members.

Settings
  - Update display name and email for the current user.
  - Change password.


ROLES & PERMISSIONS
-------------------
Admin
  - Full access to all views, including Team Members.
  - Can create, edit, and delete tasks and projects.
  - Can invite and manage team members.
  - Can assign tasks to any user.

Member
  - Can view projects and tasks they are assigned to.
  - Can update the status of their own tasks.
  - Cannot access the Team Members view.
  - Cannot create, edit, or delete projects/tasks.


TASK PROPERTIES
---------------
- Title (required)
- Description
- Project (linked project)
- Assignee (team member)
- Status: To Do | In Progress | Review | Done
- Priority: High | Medium | Low
- Due Date
- Created by / Created at (auto-set)


DATA & PERSISTENCE
------------------
All data (users, projects, tasks) is stored in-memory in the
browser's JavaScript runtime. This means:

  - Data RESETS when the page is refreshed or closed.
  - There is no backend, database, or API involved.
  - To persist data, the store object in the <script> section
    can be extended to use localStorage or connected to a
    real backend API.

The file ships with pre-loaded demo data (3 projects, 8 tasks,
4 users) so the app is fully usable out of the box.


FILE STRUCTURE
--------------
The entire application lives in a single HTML file:

  team_task_manager_fullstack.html
  ├── <style>       — All CSS (custom properties, layout,
  │                   components, responsive utilities)
  └── <script>      — All JavaScript
      ├── Data Store    (store object with users/projects/tasks)
      ├── Utilities     (helpers: getUser, isOverdue, canEdit…)
      ├── State         (UI state management)
      ├── Auth          (login, signup, logout)
      ├── App Shell     (sidebar, navigation, routing)
      ├── Views         (dashboard, tasks, projects, members,
      │                  settings, project detail)
      └── Modals        (new/edit task, new/edit project,
                         invite member, task detail)


TECH STACK
----------
- Pure HTML, CSS, and vanilla JavaScript (ES6+)
- No frameworks, no libraries, no dependencies
- No build step or bundler required
- Runs entirely in the browser


BROWSER COMPATIBILITY
---------------------
Works in all modern browsers:
  - Google Chrome 80+
  - Mozilla Firefox 75+
  - Microsoft Edge 80+
  - Safari 13+


CUSTOMIZATION
-------------
Pre-loaded demo data can be edited directly in the <script>
section under the "DATA STORE" comment block.

Available project/avatar colors (hex):
  #6366F1  #10B981  #F59E0B  #EF4444
  #8B5CF6  #EC4899  #0EA5E9  #14B8A6

To add real persistence, replace or extend the in-memory
`store` object with localStorage reads/writes or fetch()
calls to a REST API.


================================================================
