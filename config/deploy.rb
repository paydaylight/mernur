# config valid for current version and patch releases of Capistrano
lock "~> 3.14.1"

set :application,               "main"
set :repo_url,                  "git@github.com:paydaylight/mernur.git"
set :scm,                       :git
set :user,                      "root"
set :use_sudo,                  false
set :deploy_to,                 "/#{fetch(:user)}/#{fetch(:application)}"
set :deploy_via,                :remote_cache
set :ssh_options,               { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }
set :pty,                       false

set :linked_dirs,               %w{client/node_modules server/node_modules}
set :linked_files,              %w{client/.env}

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure



task :npm_install_client do
    on roles(:app) do
        execute "cd #{fetch(:deploy_to)}/current/client && yarn install"
    end
    # run "cd #{fetch(:deploy_to)}/current/client && npm install"
end

task :npm_install_server do
    on roles(:app) do
        execute "cd #{fetch(:deploy_to)}/current/server && npm install"
    end
    # run "cd #{fetch(:deploy_to)}/current/server && npm install"
end

task :build do
    on roles(:app) do
        execute "cd #{fetch(:deploy_to)}/current/client && yarn build"
    end
    # run "cd #{fetch(:deploy_to)}/current/client && yarn build"
end

task :restart do
    on roles(:app) do
        execute "service mernur restart"
    end
    # run "service docbuilder restart"
end

task :restart_nginx do
    on roles(:app) do
        execute "service nginx restart"
    end
    # run "service nginx restart"
end

# after "deploy:published", "deploy:restart"
after "deploy", "npm_install_client"
after "deploy", "build"
after "deploy", "npm_install_server"
after "deploy", "restart"
after "deploy", "restart_nginx"