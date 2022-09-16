---
layout: post
author: jays1ngh
categories: jekyll
date: 2022-09-14
thumbnail:
image:
---
## What happened?
Revisited what I started several months ago - my custom Jekyll blog. So, I tried importing existing blog which resides on Github. After this long, forgot all the basic commands to run/build Jekyll blog on the local machine.

## Problems
There were a few appeared when I browsed to local blog directory and tried running Jekyll ```bundle exec jekyll serve --livereload```.

1. Initially encountered various error. One of the errors was the following:

*No such file or directory - git ls-files -z. Bundler cannot continue.*

I guess this was fixed since I installed Git and restarted the Windows Terminal.

2. The second one was simple as the error was self explanatory. It asked me to run ```bundle install``` to install missing gems.

## What else?
Well this also reminded I can check the installed gems with this command ```bundle info [gemname]```.

All seemed well and I ran ```bundle exec jekyll serve --livereload```, which again welcomed with the below error.

```powershell
PS D:\Dev\jays1ngh.github.io> bundle exec jekyll serve --livereload
Configuration file: D:/Dev/jays1ngh.github.io/_config.yml
            Source: D:/Dev/jays1ngh.github.io
       Destination: D:/Dev/jays1ngh.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.924 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'D:/Dev/jays1ngh.github.io'
                    ------------------------------------------------
      Jekyll 4.2.2   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve/servlet.rb:3:in `<top (required)>'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve.rb:179:in `require_relative'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve.rb:179:in `setup'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve.rb:100:in `process'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/command.rb:91:in `block in process_with_graceful_fail'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/command.rb:91:in `each'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/command.rb:91:in `process_with_graceful_fail'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve.rb:86:in `block (2 levels) in init_with_program'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `block in execute'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `each'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `execute'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/mercenary-0.4.0/lib/mercenary/program.rb:44:in `go'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/mercenary-0.4.0/lib/mercenary.rb:21:in `program'
        from C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/exe/jekyll:15:in `<top (required)>'
        from C:/Ruby31-x64/bin/jekyll:32:in `load'
        from C:/Ruby31-x64/bin/jekyll:32:in `<main>'
```
<br/><br/>
Ran below with the hope of fixing this:
```bundle add webrick```

## Final thoughts
Well! the problem was fixed :)