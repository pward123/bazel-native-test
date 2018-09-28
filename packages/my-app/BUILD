load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
    name = "my-app",
    entry_point = "index.js",
    data = [
      "@npm//:lodash",
    ]
)
