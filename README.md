# Repo to reproduce Playwright issue #<fill once opened>

To reproduce, either:

* open up a branch and push a commit in it; or
* ask to be a collaborator and manually trigger the workflow.

Then:
* a GitHub Actions workflow will get triggered `.github/workflows/frontend-ci.yml`, which runs a single test in Webkit;
* the report is then uploaded as a workflow artifact;
* the report's trace can then be uploaded to and viewed in https://trace.playwright.dev/.

In the trace, the little preview popup, available upon hovering over the timeline view, has incorrect zoom level, which is the bug being reported.

![Screenshot 2024-03-14 at 17 19 36](https://github.com/nbaldzhiev/playwright-webkit-trace-zoom-bug/assets/19264892/396c06da-0a99-4799-b10b-255f5c58cd3a)
