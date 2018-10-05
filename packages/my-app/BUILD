load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

filegroup(
    name = "src_files",
    srcs = ["index.js"],
)

nodejs_binary(
    name = "my-app",
    entry_point = "workspace_name/packages/my-app/index.js",
    data = [
        ":src_files",
        "@npm//:lodash",
    ]
)
