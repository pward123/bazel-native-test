git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.14.1",
)

# Setup dependencies for the nodejs bazel package
load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")
rules_nodejs_dependencies()

# Setup the basic nodejs bazel package
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

# Install npm packages
load("@build_bazel_rules_nodejs//:defs.bzl", "npm_install")
npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)
