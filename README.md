## React boilerplate with typescript

### Structure 
        

     |___config                         ---> webpack folder
     |   |___build
     |       |___types
     |       |   |___configTypes.ts     ---> webpack types
     |       |___buildDevServer.ts      ---> devServer configs
     |       |___buildLoaders.ts        ---> webpack Loaders
     |       |___buildPluging.ts        ---> webpack Plugins
     |       |___buildResolver.ts       ---> webpack Resolver
     |       |___buildWebpackConfig.ts  ---> webpack config
     <-------> public folder
     |___src
     |   |___app
     |   |   |___styles
     |   |   |   |___variebles
     |   |   |   |   |___global.scss    ---> global variebles
     |   |   |   |___index.scss         ---> entry scss includes all global imports
     |   |   |   |___reset.scss         ---> Reset default styles
     |   |   |
     |   |   |___types
     |   |   |   |___global.d.ts        ---> decrarative types
     |   |   |___App.tsx                ---> App entry file
     |   |___pages
     |   |   |___TemplatePage        
     |   |       |___assets 
     |   |       |___ui              ---> folder includes template files    
     |   |       |___index.ts        ---> entry page file
     |   |___shared                  ---> folder for shared components
     |   |___index.tsx               ---> entry index.tsx
     |___.eslintrc.js                ---> eslint config
     |___.gitignore
     |___.stylelintrc.json           ---> stylelint config
     |___package.json
     |___README.md
     |___tsconfig.json               ---> typescript config
     |___webpack.config.ts           ---> entry webpack config

### Scripts

    npm start - launch the app on port 3000

    npm run build:dev - build app development mode

    npm run build:prod - build app production mode

    npm run lint:ts:check - run linter

    npm run lint:ts:fix - run linter and fix errors

    npm run lint:style:check - run style liner

    npm run lint:style:fix - run style liner and fix errors

    npm run lint:fix - run code and style linters and fix errors



