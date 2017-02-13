# config valid only for current version of Capistrano
lock "3.7.2"

set :application, "resume"
set :repo_url, "git@github.com:mobei/resume.git"
set :user, 'root'
set :password, "2014-mobeiforl"  

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/resume"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true
# ln -nfs "/var/www/vue-demo1/current/config/nginx/production.nginx.conf" "/etc/nginx/sites-enabled/website.conf"软连接配置

# Default value for :linked_files is []
# append :linked_files, "config/nginx/production.nginx.conf"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
set :ssh_options, user: fetch(:user), forward_agent: true
