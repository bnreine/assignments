#### questions


> What are the typical Agile team roles and what parts of the development lifecycle is each role responsible for?

A: Product Manager (PM), Project Manager (APM), Designer (Des), User Researcher (UR), Team Lead (TL), and Developer (Dev)

1. PM: Strategy, roadmap, and feature definition of a product
2. APM: Process management and timely delivery of product
3. Des: Design of product (mockups, wireframes, and interactions)
4. UR: Run tests and create profile of target use.  Needs to understand behavior and psychology of target user.
5. TL: Technical management, direction, and quality of projects.
6. Dev: Technical creation, maintenance, and integrity of product.

>Why do we use Kanban boards in Agile development?

A: To organize tasks of a given sprint or overall project.

> Explain velocity and sprint as if you were teaching another student.

A: A sprint is a chunk of time over which your team will develop a particular user functionality to the product.  Each sprint contains multiple cards (usually composed of one user story each), which are the smallest units of work that can give the user value.  Each card is prioritized by assigning it a number of points based on its estimated size/complexity.  Velocity is the total number of points completed by the end of the sprint.

> What format makes a good user story?

A: "As a [role] I want [something] so that [value]"

> What are different estimation methods teams can use? Explain pros and cons of each method. Which method would you prefer?

A:
1. t-shirt sizes (XS, S, M, L, XL): Pros--> simple to start, not that many bins; Cons: Doesn't give enough precision
2. fibonacci (1, 1, 2, 3, 5, 8, 13, 22): Pros---> Doesn't have too many high numbers which have low accuracy anyway; Cons: Many more bins to choose from and difficulty to start.
3. powers of 2 (1, 2, 4, 8, 16, 32): Pros---> Same pro as above; Cons: promotes laziness in reassessing.  Can just multiply or divide by 2.

I like the Fibonacci sizing method because it limits the high numbers and forces you to think carefully about reassessing if
you decide to change your number later.

>Give a real-world example of a development project, and explain the breakdown into epic(s), slices, cards, and tasks.

A:
Johnny's boss George tells him that he wants a sports webpage.  The epic (larger story) is creating the sports webpage.
Johnny works in a feature driven development team.  This means the team cuts up the overall epic (larger story) into smaller vertical slices.  One vertical slice represents a chunk of functionality to the overall epic (story).  
Johnny breaks up the epic into 3 vertical slices:

1. Slice 1. post top stories.
2. Slice 2. header drop-down with clickable links to 3 different sports: hockey, football, and baseball.
3. Slice 3. login for fantasy league

The leadership decides that each vertical slice represents one sprint.  Johnny's task this week is
to tackle the second sprint.  Within this sprint, he breaks that down into 3 user stories or cards, one
for each sport listed.  Within the hockey card:

1. Card 1 (story): As a hockey fan, I want to see the hockey standings, so that I can stay up to date on the playoffs.
2. Card 2 (story): As a football fan, I want to see the football standings, so that I can stay up to date on the playoffs.
3. Card 3 (story): As a baseball fan, I want to see the baseball standings, so that I can stay up to date on the playoffs.  

Within Card 1, Johnny breaks this user facing requirement (story) into 2 developer tasks:

1. Task 1: Find suitable links for team rankings and integrate this within the database, front-end, and back-end
2. Task 2: Find suitable links to show playoff stats: front-end displays, back-end computation/services, and anything necessary to store in a database


> Explain in your own words what a dual-track system is and what advantages it provides.

A: A system where the designers come up with new mockups/wireframes for user needs at the same time
that developers work on existing needs that the design team came up with and already approved.  This way, neither the designers
nor the developers have to wait for the other.

>Choose one of the following projects and write each card that would be in the epic. Estimate each card. What columns would you need to have on your Kanban board?
1. Finding and leasing a new apartment.
2. Creating a nursery for a new baby.
3. Planning a vacation. ---> I choose this one

A:

Epic: Plan vacation to Canada

Columns (Vertical Slices):
1. Things to do:
Card 4. As a vacationer, I want to play shuffleboard with my nephew, so I'll do that and have fun (Fibonnaci scale: 3pts)

2. Doing:
Card 3. As a vacationer, I want to go swimming in the lake, so I'll bring swim shorts so that I can swim (Fibonnaci scale: 3pts)

3. Done:
Card 1. As a vacationer, I want to have a place to sleep, so I'll book the resort; (Fibonnaci scale: 8pts)
Card 2: As a vacationer, I want to get past border security, so I'll remember to bring my passport (Fibonnaci scale: 1pts)



#### Project

> Create a Trello board for a Hacker News clone.
> Create user stories for each feature.
> Break the work into slices and epics as needed.
> Estimate your cards.

A: Please see the following link for all 4 of the above questions:
https://trello.com/b/wFMROjGK/hacker-news-clone
(I've put card scoring and card description (user story) on each card)
(I've made it public, so graders can view it)

> Explain what estimation methods you used.

A: I used the Fibonacci scoring method for each card, considering both relative size and relative complexity.
