export default function DocsPage() {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="mx-auto">
        <div className="space-y-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              INX Version Control
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Manage your code with the powerful distributed version control
              system.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <section className="space-y-6" id="getting-started">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Getting Started</h2>
            <p className="text-gray-500 dark:text-gray-400">
              INX is a distributed version control system that allows you to
              track changes in your buckets, collaborate with others, and manage
              your plugins history.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              To get started with INX, youll need to install it on your
              computer. Once you have it installed, you can initialize a new INX
              bucket for your plugin or clone an existing one.
            </p>
          </div>
        </section>
        <section className="space-y-6" id="installing">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Installing</h2>
            <p className="text-gray-500 dark:text-gray-400">
              You can download INX from the official website. The installation
              process is straightforward and should work on Windows, macOS, and
              Linux.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Once youve installed INX, you can verify the installation by
              opening a terminal or command prompt and running the following
              command:
            </p>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX --version</code>
            </pre>
          </div>
        </section>
        <section className="space-y-6" id="branching-and-merging">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Branching and Merging
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Branching is a powerful feature of INX that allows you to create
              separate lines of development. You can use branches to experiment
              with new features, fix bugs, or collaborate with others.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Some common branching and merging commands include:
            </p>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX branch - Create a new branch</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX checkout - Switch to a different branch</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX merge - Combine changes from one branch into another
              </code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX rebase - Reapply commits from one branch onto another
              </code>
            </pre>
          </div>
        </section>
        <section className="space-y-6" id="collaboration">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Collaboration</h2>
            <p className="text-gray-500 dark:text-gray-400">
              INX makes it easy to collaborate with others on a project. You can
              share your code by pushing it to a remote repository, such as
              INXHub or INXLab, and then allow others to clone the repository
              and contribute.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Some common collaboration commands include:
            </p>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX remote - Manage connections to remote repositories
              </code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX fetch - Retrieve changes from a remote repository</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX pull - Fetch and merge changes from a remote repository
              </code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX push - Push your commits to a remote repository</code>
            </pre>
          </div>
        </section>
        <section className="space-y-6" id="troubleshooting">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Troubleshooting</h2>
            <p className="text-gray-500 dark:text-gray-400">
              If you encounter any issues while using INX, there are a few
              things you can try:
            </p>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX status - Check the current state of your repository
              </code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX log - View the commit history</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX diff - View the changes in your working directory</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>INX reset - Undo changes or move the HEAD pointer</code>
            </pre>
            <pre className="rounded-lg border border-gray-200 bg-gray-100 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <code>
                INX stash - Temporarily save changes without committing
              </code>
            </pre>
            <p className="text-gray-500 dark:text-gray-400">
              If youre still having trouble, you can consult the official INX
              documentation or seek help from the INX community.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
