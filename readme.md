# bazel-native-test

Reproduction of an issue with https://github.com/bazelbuild/rules_nodejs

When running `docker-compose up`, the following error occurs

```
pward123$ docker-compose up
Creating network "bazel-native-test_default" with the default driver
Creating bazel-native-test_bazel_1 ... done
Attaching to bazel-native-test_bazel_1
bazel_1  | Starting local Bazel server and connecting to it...
bazel_1  | Loading:
bazel_1  | Loading: 0 packages loaded
bazel_1  | Analyzing: target //packages/my-app:my-app (3 packages loaded)
bazel_1  | Analyzing: target //packages/my-app:my-app (14 packages loaded)
bazel_1  | ERROR: Analysis of target '//packages/my-app:my-app' failed; build aborted: no such package '@nodejs//': Traceback (most recent call last):
bazel_1  | 	File "/root/.cache/bazel/_bazel_root/f8087e59fd95af1ae29e8fcb7ff1a3dc/external/build_bazel_rules_nodejs/internal/node/node_repositories.bzl", line 371
bazel_1  | 		_prepare_node(repository_ctx)
bazel_1  | 	File "/root/.cache/bazel/_bazel_root/f8087e59fd95af1ae29e8fcb7ff1a3dc/external/build_bazel_rules_nodejs/internal/node/node_repositories.bzl", line 276, in _prepare_node
bazel_1  | 		repository_ctx.file("bin/npm_node_repositories", conte...])), ...)
bazel_1  | 	File "/root/.cache/bazel/_bazel_root/f8087e59fd95af1ae29e8fcb7ff1a3dc/external/build_bazel_rules_nodejs/internal/node/node_repositories.bzl", line 281, in repository_ctx.file
bazel_1  | 		"".join(["\necho Running npm \"$@\" in {...])
bazel_1  | 	File "/root/.cache/bazel/_bazel_root/f8087e59fd95af1ae29e8fcb7ff1a3dc/external/build_bazel_rules_nodejs/internal/node/node_repositories.bzl", line 281, in "".join
bazel_1  | 		"\necho Running npm \"$@\" in {root}\n(cd \"{root}\"; \"$CUR_DIR/{node}\" \"$CUR_DIR/{script}\" --scripts-prepend-node-path=false \"$@\")\n".format(root = repository_ctx.path(packa..., <2 more arguments>)
bazel_1  | 	File "/root/.cache/bazel/_bazel_root/f8087e59fd95af1ae29e8fcb7ff1a3dc/external/build_bazel_rules_nodejs/internal/node/node_repositories.bzl", line 285, in "\necho Running npm \"$@\" in {root}\n
bazel_1  | 		repository_ctx.path(package_json)
bazel_1  | Unable to load package for //:package.json: not found.
bazel_1  | INFO: Elapsed time: 3.703s
bazel_1  | INFO: 0 processes.
bazel_1  | FAILED: Build did NOT complete successfully (14 packages loaded)
bazel_1  | ERROR: Build failed. Not running target
bazel_1  | FAILED: Build did NOT complete successfully (14 packages loaded)
bazel-native-test_bazel_1 exited with code 1
```
