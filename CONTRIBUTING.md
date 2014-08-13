# Guidelines

## Communication

Please use [iiif-discuss@googlegroups.com](mailto:iiif-discuss@googlegroups.com) for general discussion, questions and feedback on the demos.  This is to ensure that the entire community can see what is being, and has been discussed. Searching in github issues for answers to a question that has already been answered is much less convenient than reading through issues in a google group.  It is also to ensure that non-technical contributors have a chance to engage without feeling intimidated by the more code-oriented nature of github.

Please file issues in github for problems with the website.  One issue should be used per problem, so that we can work on them individually and either mark them as wontfix, defer, or close them when they're solved.

The committers take responsibility for ensuring that comments and feedback on iiif-discuss are turned into issues.  Please check that your issue discussed on the email list hasn't already been added.

Pull requests are welcome.  Please read on for how to contribute directly.

## Making Changes

Please do not work on master. Submit pull requests from branches, and [squash your commits][squash] prior. For example:

```
 $ git checkout master
 $ git checkout pull # make sure you're up to date
 $ git checkout my_cool_branch
 $ git rebase -i master
```

and follow the prompts. Generally you'll `pick` the first commit and `squash` the rest into it.

## English

Specs are written in American English. Use:

* *color* not ~~*colour*~~
* *gray* not ~~*grey*~~

## Markdown

Use the [Kramdown syntax][kram].

## Images

Images must be PNG.

## Use of Page vs Site Variables

The _config.yml file defines various site level variables.

## Front Matter

 * Use `tags`, not `category` or `categories`.
 * Look at previous posts and specs to determine what tags/categories to use.
 * News posts must include:

    * title
    * author
    * tags
    * layout: post

    and may include an excerpt.

[kram]: http://kramdown.gettalong.org/syntax.html
[squash]: http://lmgtfy.com/?q=Squash+git+commits
