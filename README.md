# Waiter Cloud

Waiter Cloud is a mobile-first platform for the food industry. It connects food lovers, recipe authors, restaurants, cooking schools, employees, and businesses through one shared discovery and employment ecosystem.

The platform is designed around public discovery, recipe management, business profiles, professional profiles, employment workflows, comments, reviews, and user-controlled privacy.

## Product Vision

Waiter Cloud helps users discover food-related content and opportunities in one place.

A user can:

- discover recipes, restaurants, cooking schools, employees, and jobs;
- create and manage public, private, or partly private recipes;
- fork public recipes and create independent modified versions;
- review and comment on public entities;
- create a professional employee profile;
- apply for jobs;
- receive proposals from businesses;
- manage agreements through contracts;
- save and personalize content based on interests;
- browse content relevant to a selected country.

The first release is consumer-first. Restaurants and cooking schools are initially created and managed by the Waiter Cloud team. Businesses may claim and manage their profiles later.

## Target Audience

The primary audience is regular food lovers.

The platform also supports users acting as:

- recipe authors;
- chefs;
- cooks;
- waiters;
- bartenders;
- restaurant employees;
- job seekers;
- restaurant representatives;
- cooking-school representatives;
- reviewers.

One account may support multiple roles at the same time.

## Core Entities

Waiter Cloud is built around the following entities:

- `recipe`
- `restaurant`
- `school`
- `employee`
- `job`
- `application`
- `proposal`
- `contract`
- `comment`

### Public entities

These entities may be publicly discoverable:

- recipes;
- restaurants;
- cooking schools;
- employees;
- jobs;
- comments and reviews.

### Workflow entities

These entities belong to the employment workflow:

- applications;
- proposals;
- contracts.

Their visibility depends on the users and businesses involved.

## Mobile Layout

Waiter Cloud is designed primarily for mobile use.

### Footer navigation

The footer order is:

1. Investment
2. Explore
3. Map
4. Feed
5. Workspace

This order intentionally places the most frequently used pages closer to the right-hand thumb.

### Top bar

The top bar contains:

1. Profile
2. Current page name
3. Settings

No side menu is required.

## Pages

The platform contains ten main pages.

### 1. Feed

A personalized scrollable content feed.

The feed can display different entity types using their full view components. The initial focus is food content, especially recipes, but the page can also show restaurants, schools, employees, jobs, applications, proposals, and contracts when product logic requires them.

Primary interactions:

- swipe right to add an item to favourites;
- swipe left to ignore the author;
- ignored authors should no longer appear in the user’s content;
- scroll vertically through content;
- use a dedicated next action when needed;
- open the full entity page;
- follow or interact with the author or business where supported.

The developer decides which entity types and filters are active in each feed mode.

### 2. Explore

A public discovery page for browsing platform entities.

Explore presents short entity cards and supports:

- entity-type selection;
- search;
- categorized filters;
- country-aware content;
- public content from other users and businesses;
- navigation to the full entity page.

### 3. Map

A location-based discovery page.

The map can display icons for supported entities, including:

- recipes where location context is useful;
- restaurants;
- cooking schools;
- employees using approximate shared locations;
- jobs.

The user can control what is displayed. The default view should reflect the user’s interests.

Private workflow entities are not intended for map display.

### 4. Entity

The `entity` page displays the full selected entity.

It is used for:

- recipes;
- restaurants;
- cooking schools;
- employees;
- jobs;
- applications;
- proposals;
- contracts;

Where supported, the page also displays:

- comments;
- reviews;
- ratings;
- author information;
- ownership information;
- related entities;
- fork information;
- status and visibility information.

### 5. Editor

The editor creates or updates an entity using the matching form component.

Supported forms include:

- recipe form;
- restaurant form;
- school form;
- employee form;
- job form;
- application form;
- proposal form;
- contract form;

Creating or managing private user data requires authentication.

### 6. Sign

The sign page handles account access.

It includes:

- registration;
- sign in;
- password recovery;
- account access required by protected actions.

Public discovery should remain available without registration wherever possible.

### 7. Profile

The profile page displays and edits the current user’s public information.

A user controls which information is shared publicly.

Possible information includes:

- name;
- photo;
- biography;
- food interests;
- professional roles;
- work preferences;
- country and city;
- experience;
- public recipes;
- restaurants or schools connected to the user;
- employee information;
- jobs and professional activity where appropriate.

A user is not automatically an employee. Employee visibility is enabled only when the user chooses to create and publish an employee profile.

### 8. Workspace

Workspace is the private management area for entities owned by, shared with, or connected to the current user.

Workspace may contain:

- owned recipes;
- private recipes;
- shared recipes;
- favourite entities;
- restaurants and schools managed by the user;
- employee profile;
- jobs;
- applications;
- proposals;
- contracts.

Workspace may later support different contexts:

- personal workspace;
- restaurant workspace;
- cooking-school workspace.

### 9. Settings

Settings controls account and personalization preferences.

Possible settings include:

- password;
- interface language;
- country;
- location preferences;
- interests;
- feed preferences;
- visible entity types;
- privacy options;
- ignored authors;
- account preferences.

The default country may be suggested using several signals, including device settings, time settings, IP location, and user selection. The user must always be able to change it manually.

### 10. Investment

Waiter Cloud is open to business opportunities related to the platform.

The Investment page may communicate that the team is open to:

- investment;
- strategic partnerships;
- selling part of the platform;
- selling the complete platform;
- business acquisition discussions;
- cooperation with food-industry organizations.

## Component Structure

The following shared domain components are used by the pages.

```text
src/app/components/
├── recipe/
│   ├── recipe-view/
│   ├── recipe-short/
│   ├── recipe-icon/
│   └── recipe-form/
│
├── restaurant/
│   ├── restaurant-view/
│   ├── restaurant-short/
│   ├── restaurant-icon/
│   └── restaurant-form/
│
├── school/
│   ├── school-view/
│   ├── school-short/
│   ├── school-icon/
│   └── school-form/
│
├── employee/
│   ├── employee-view/
│   ├── employee-short/
│   ├── employee-icon/
│   └── employee-form/
│
├── job/
│   ├── job-view/
│   ├── job-short/
│   ├── job-icon/
│   └── job-form/
│
├── application/
│   ├── application-view/
│   ├── application-short/
│   └── application-form/
│
├── proposal/
│   ├── proposal-view/
│   ├── proposal-short/
│   └── proposal-form/
│
├── contract/
│   ├── contract-view/
│   ├── contract-short/
│   └── contract-form/
│
└── comment/
    ├── comments-view/
    ├── comment-short/
    └── comment-form/
```

### Component meaning

- `*-view` presents the full entity content.
- `*-short` presents a compact card or summary.
- `*-icon` presents an entity on the map or in another compact visual context.
- `*-form` creates or edits an entity.

Applications, proposals, and contracts do not currently require map icon components.

## Page Structure

```text
src/app/pages/
├── feed/
├── explore/
├── map/
├── workspace/
├── investment/
├── entity/
├── editor/
├── sign/
├── profile/
└── settings/
```

## Components Used by Each Page

All listed components are directly available to their pages. Product and rendering logic determines when each one is shown.

### Feed

```text
recipe/recipe-view
restaurant/restaurant-view
school/school-view
employee/employee-view
job/job-view
application/application-view
proposal/proposal-view
contract/contract-view
```

### Explore

```text
recipe/recipe-short
restaurant/restaurant-short
school/school-short
employee/employee-short
job/job-short
application/application-short
proposal/proposal-short
contract/contract-short
```

### Map

```text
recipe/recipe-icon
restaurant/restaurant-icon
school/school-icon
employee/employee-icon
job/job-icon
```

### Workspace

```text
recipe/recipe-short
restaurant/restaurant-short
school/school-short
employee/employee-short
job/job-short
application/application-short
proposal/proposal-short
contract/contract-short
```

### Entity

```text
recipe/recipe-view
restaurant/restaurant-view
school/school-view
employee/employee-view
job/job-view
application/application-view
proposal/proposal-view
contract/contract-view

comment/comments-view
comment/comment-short
comment/comment-form
```

### Editor

```text
recipe/recipe-form
restaurant/restaurant-form
school/school-form
employee/employee-form
job/job-form
application/application-form
proposal/proposal-form
contract/contract-form
```

### Profile

```text
recipe/recipe-short
restaurant/restaurant-short
school/school-short
employee/employee-short
job/job-short
application/application-short
proposal/proposal-short
contract/contract-short
```

### Sign

No shared domain components are currently required.

### Settings

No shared domain components are currently required.

### Investment

No shared domain components are currently required.

## Recipe Logic

Each recipe belongs to one user.

A recipe may also be connected to a restaurant, but the original author remains visible. This allows a restaurant to publish a recipe while preserving the chef or creator as the author.

### Visibility levels

A recipe may be:

- public;
- public preview with private full content;
- fully private;
- shared with selected users;
- available for paid access or paid fork in the future.

A partly private recipe may expose selected public information such as:

- title;
- image;
- author;
- statistics;
- restaurants using the recipe;
- fork count;
- selected public details.

### Recipe forks

Users may fork a recipe when access rules allow it.

A fork:

- becomes a completely new recipe document;
- belongs to the user who created the fork;
- stores the original recipe identifier in a `forked` reference;
- may be independently modified;
- should preserve the relationship to the original recipe;
- may be visible to the original author depending on access rules.

The original recipe may display:

- users who forked it;
- forked versions;
- how forked versions were modified where visibility permits;
- fork statistics.

A private recipe may later support selling access to create a fork.

## Restaurants and Cooking Schools

Restaurants and cooking schools are public business entities.

In the first release:

- profiles are created and managed by the Waiter Cloud team;
- businesses are not expected to maintain their profiles immediately;
- public business information may be collected and managed centrally.

Later, a business may:

- claim its profile;
- verify ownership;
- manage its public information;
- publish recipes;
- connect recipes to authors;
- publish jobs;
- review applications;
- send proposals;
- manage contracts;
- use a business workspace.

Profile claiming may become an important monetization path.

## Employment Workflow

The employment process follows this sequence:

1. A business publishes a job.
2. An employee submits an application.
3. A business may send a proposal.
4. The parties agree on conditions.
5. A contract is created.
6. The contract progresses through agreement and signature phases.
7. The contract remains available until completion, cancellation, or expiration.

### Employee

A user may choose to become publicly visible as an employee.

The user controls:

- whether the employee profile is active;
- preferred job types;
- professional roles;
- experience;
- country and city;
- work format;
- availability;
- public contact information;
- any other shared professional details.

Exact private location should not be required.

### Job

A job represents a public work opportunity created by a business.

### Application

An application is created by an employee in response to a job or business opportunity.

### Proposal

A proposal is created by a business and sent to an employee.

It may be connected to:

- a job;
- an application;
- an employee;
- a restaurant;
- a cooking school;
- another supported business entity.

### Contract

A contract is a platform document representing an agreed working relationship.

It may contain:

- involved parties;
- connected job;
- connected application;
- connected proposal;
- agreements;
- conditions;
- signature phases;
- signature dates;
- effective date;
- expiration date;
- current status;
- status history.

The contract has its own entity page.

## Comments and Reviews

Public entities may support comments, feedback, ratings, and reviews.

Comments and reviews may be available for:

- recipes;
- restaurants;
- cooking schools;
- employees;
- jobs where appropriate;

Anyone may submit feedback where permitted by moderation rules.

A special reviewer role may be introduced. Reviews from verified reviewers should receive stronger visual priority and appear above regular reviews.

Future filtering may consider:

- reviewer role;
- review quality;
- helpful votes;
- verification status;
- relevance;
- date;
- moderation status.

## Profiles, Ownership, and Privacy

Each user controls which personal and professional information is public.

Public visibility should always be explicit for sensitive profile information.

Important rules:

- every employee is connected to a user;
- not every user is an employee;
- every recipe belongs to a user;
- a recipe may also be connected to a restaurant;
- business profiles may initially be centrally managed;
- claimed business profiles may later be managed by verified representatives;
- private workflow entities should be visible only to involved users and businesses;
- private recipes remain accessible only according to their visibility rules.

## Country and Personalization

All users and businesses should be connected to a country.

Waiter Cloud may suggest a default country using:

- IP location;
- device language;
- device region;
- device time zone;
- user-selected location;
- other reliable location signals.

The selected country affects:

- feed content;
- Explore results;
- map results;
- restaurants;
- schools;
- employees;
- jobs;
- language and regional defaults.

The user must always be able to manually change the selected country.

## Initial Release

The initial release should focus on establishing the platform structure and public content.

Initial priorities:

- mobile-first experience;
- public recipe discovery;
- recipe creation and privacy;
- recipe forks;
- restaurant discovery;
- cooking-school discovery;
- employee profiles;
- jobs;
- applications;
- proposals;
- contracts;
- comments and reviews;
- country-aware content;
- centrally managed restaurant and school profiles.

Direct messaging is not required initially. Public contact information may allow users and businesses to communicate outside Waiter Cloud.

Monetization is not required for the first release.

## Future Business Options

Possible future business models include:

- paid business profile claiming;
- verified business accounts;
- promoted restaurants or schools;
- promoted jobs;
- premium professional profiles;
- paid private recipe access;
- paid recipe forks;
- business subscriptions;
- recruitment tools;
- contract-management tools;
- partnerships;
- investment;
- partial or full platform acquisition.

These options should not block the first public release.

## API

### Existing CRUD routes

The backend currently exposes generic CRUD routes for these collections. The
public layout can use the read routes today; Feed, Map, and a unified Entity
API do not exist yet and are intentionally not listed here.

For every collection below:

| Method + URL | Query / body |
| --- | --- |
| `GET /api/<collection>/get` | Query: `page`, `perPage`, `query` |
| `POST /api/<collection>/fetch` | `{ _id }` |
| `POST /api/<collection>/create` | `{ ...collectionFields }` |
| `POST /api/<collection>/update` | `{ _id, ...editableCollectionFields }` |
| `POST /api/<collection>/delete` | `{ _id }` |

Available public-layout collections:

- `companydeliverrecipe` — recipes
- `companydeliverrestaurant` — restaurants
- `companydeliverschool` — cooking schools
- `companydeliveremployee` — employee profiles
- `companydeliverjob` — jobs
- `companydelivercomment` — comments

Employment collections already exposed by CRUD:

- `companydeliverapplication`
- `companydelivercontract`

The existing specific employment endpoints are:

| Method + URL | Body / query |
| --- | --- |
| `GET /api/company/deliver/job/list` | No body |
| `POST /api/company/deliver/employee/application/apply` | `{ company, job?, coverLetter }` |
| `GET /api/company/deliver/employee/application/mine` | No body |
| `POST /api/company/deliver/employee/application/withdraw` | `{ _id }` |
| `GET /api/company/deliver/contract/mine` | No body |
| `POST /api/company/deliver/contract/sign` | `{ _id }` |
