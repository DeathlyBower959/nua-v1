# Contributing

<!-- TODO: CONTRIBUTING.md -->

<!-- TODO: Explain git flow -->

## Git Flow

### New Feature

1. Confirm on develop branch

   ```sh
   git switch develop
   ```

2. Create a new feature branch

   ```sh
   # Git switch auto checks out to the new branch
   git switch -c feature/FEATURE-NAME
   ```

3. Push changes

   ```sh
   git add .
   git commit -m "Feat: MESSAGE"
   git push -u origin feature/FEATURE-NAME
   ```

4. Create a pull request

   <img src="./assets/create-pull-request.png" width="407.5"/>

   Fill out title and description fields (and confirm the `INTO` branch is set to `develop`)

   <img src="./assets/edit-pull-request.png" width="407.5"/>

5. Merge pull request back into develop

   > I suggest waiting for a reviewer before merging

   Once the checks complete (preview deployment), merge the branch

   <img src="./assets/merging-pull-request.png" width="407.5"/>
   <img src="./assets/merge-pull-request.png" width="407.5"/>
   <img src="./assets/delete-pull-request-branch.png" width="407.5"/>
   <img src="./assets/final-delete-pull-request.png" width="407.5"/>
