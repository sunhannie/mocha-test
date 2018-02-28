mocha   运行test文件夹中的内容
mocha demo1/calcu.test.js 测试demo1文件中的内容



### DETECTS MULTIPLE CALLS TO DONE()
If you use callback-based async tests, Mocha will throw an error if done() is called multiple times. This is handy for catching accidental double callbacks.

检测多个调用完成()
如果done() 被多次调用,如果您使用基于callback的异步测试，Mocha将会抛出一个错误。这对于捕捉意外的双回调非常方便。

### ASSERTIONS
Mocha allows you to use any assertion library you wish. In the above example, we’re using Node.js’ built-in assert module–but generally, if it throws an Error, it will work! This means you can use libraries such as:

断言
Mocha允许您使用任何您希望的断言库。在上面的例子中，我们使用node.js的内置assert模块，但一般来说，如果它抛出一个错误，它将会起作用!这意味着您可以使用诸如:

should.js - BDD style shown throughout these docs
expect.js - expect() style assertions
chai - expect(), assert() and should-style assertions
better-assert - C-style self-documenting assert()
unexpected - “the extensible BDD assertion toolkit”

ASYNCHRONOUS CODE
Testing asynchronous code with Mocha could not be simpler! Simply invoke the callback when your test is complete. By adding a callback (usually named done) to it(), Mocha will know that it should wait for this function to be called to complete the test. This callback accepts both an Error instance (or subclass thereof) or a falsy value; anything else will cause a failed test.

异步代码
使用Mocha测试异步代码很简单!当测试完成时，只需调用回调。通过在it()中添加一个回调(通常称为done)， Mocha将知道它应该等待调用这个函数来完成测试。这个回调接受一个错误实例(或其子类)或一个假值;否则将导致测试失败。

WORKING WITH PROMISES
Alternately, instead of using the done() callback, you may return a Promise. This is useful if the APIs you are testing return promises instead of taking callbacks:

有PROMISES
另外，您可以返回一个PROMISES，而不是使用done()回调。如果您正在测试的api返回PROMISES而不是回调，那么这将非常有用。

In Mocha v3.0.0 and newer, returning a Promise and calling done() will result in an exception, as this is generally a mistake:

在Mocha v3.0.0和更新中，返回一个承诺并调用done()将导致异常，因为这通常是一个错误:

USING ASYNC / AWAIT
If your JS environment supports async / await you can also write asynchronous tests like this:

使用异步/等待
如果您的JS环境支持异步/等待，您也可以编写这样的异步测试:

SYNCHRONOUS CODE
When testing synchronous code, omit the callback and Mocha will automatically continue on to the next test.

同步代码
在测试同步代码时，忽略回调，Mocha将自动继续进行下一次测试。

ARROW FUNCTIONS
Passing arrow functions (“lambdas”) to Mocha is discouraged. Lambdas lexically bind this and cannot access the Mocha context. For example, the following code will fail:

箭头功能
传递箭头函数(“lambdas”)到Mocha是不鼓励的。Lambdas将此绑定，不能访问Mocha上下文。例如，以下代码将失败:

HOOKS
With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.

钩子
使用默认的“BDD”样式接口，Mocha提供了钩子before()、after()、before each()和afterEach()之前。这些应该用于设置先决条件，并在测试后进行清理。

  ```
    describe('hooks', function() {

      before(function() {
        // runs before all tests in this block
      });

      after(function() {
        // runs after all tests in this block
      });

      beforeEach(function() {
        // runs before each test in this block
      });

      afterEach(function() {
        // runs after each test in this block
      });

      // test cases
    });

  ```

  Tests can appear before, after, or interspersed with your hooks. Hooks will run in the order they are defined, as appropriate; all before() hooks run (once), then any beforeEach() hooks, tests, any afterEach() hooks, and finally after() hooks (once).

  测试可以出现在您的钩子之前、之后或穿插。钩子将按照它们被定义的顺序运行;所有before()钩子运行(一次)，然后在每个beforeEach()钩子、测试、任何afterEach()钩子上，最后在after()钩子(一次)。

  DESCRIBING HOOKS
Any hook can be invoked with an optional description, making it easier to pinpoint errors in your tests. If a hook is given a named function, that name will be used if no description is supplied.

描述钩子
任何钩子都可以用一个可选的描述来调用，这样可以更容易地查明测试中的错误。如果一个钩子被赋予一个指定的函数，如果没有提供描述，这个名称将被使用。

ROOT-LEVEL HOOKS
You may also pick any file and add “root”-level hooks. For example, add beforeEach() outside of all describe() blocks. This will cause the callback to beforeEach() to run before any test case, regardless of the file it lives in (this is because Mocha has an implied describe() block, called the “root suite”).

根级钩子
您还可以选择任何文件并添加“根”级挂钩。例如，在所有描述()块之外添加beforeEach()。这将导致在每个测试用例之前运行回调()，而不考虑它所驻留的文件(这是因为Mocha有一个隐含的描述()块，称为“根套件”)。

DELAYED ROOT SUITE
If you need to perform asynchronous operations before any of your suites are run, you may delay the root suite. Run mocha with the --delay flag. This will attach a special callback function, run(), to the global context:

推迟根套件
如果您需要在运行任何一个套件之前执行异步操作，您可以延迟根套件。用“延迟标志”运行摩卡。这将在全局上下文中附加一个特殊的回调函数run():

PENDING TESTS
“Pending”–as in “someone should write these test cases eventually”–test-cases are simply those without a callback:

PENDING TESTS
“待定”-就像在“某人应该写这些测试用例”- - -测试用例只是没有回调的那些:

EXCLUSIVE TESTS
The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function. Here’s an example of executing only a particular suite:

独家测试
独占特性允许您只通过附加.only()来运行指定的套件或测试用例。这里有一个仅执行特定套件的示例:

INCLUSIVE TESTS
This feature is the inverse of .only(). By appending .skip(), you may tell Mocha to simply ignore these suite(s) and test case(s). Anything skipped will be marked as pending, and reported as such. Here’s an example of skipping an entire suite:

包容性测试
该特性是.only()的倒数。通过附加.skip()，您可以告诉Mocha简单地忽略这些套件和测试用例。任何跳过的内容将被标记为pending，并报告为这样。这里有一个跳过一整套的例子:

RETRY TESTS
You can choose to retry failed tests up to a certain number of times. This feature is designed to handle end-to-end tests (functional tests/Selenium…) where resources cannot be easily mocked/stubbed. It’s not recommended to use this feature for unit tests.

This feature does re-run beforeEach/afterEach hooks but not before/after hooks.

重试测试
您可以选择重试失败的测试到一定次数。这个功能是为了处理端到端测试(功能测试/硒…)在资源无法轻易 mocked/stubbed。不建议在单元测试中使用此特性。

这个特性在beforeEach/afterEach都要重新运行，而不是before/after。

DYNAMICALLY GENERATING TESTS
Given Mocha’s use of Function.prototype.call and function expressions to define suites and test cases, it’s straightforward to generate your tests dynamically. No special syntax is required — plain ol’ JavaScript can be used to achieve functionality similar to “parameterized” tests, which you may have seen in other frameworks.

动态生成测试
提供了Mocha的功能原型。调用和函数表达式来定义套件和测试用例，很容易动态地生成测试。不需要特殊的语法——plain ol的JavaScript可用于实现类似于“参数化”测试的功能，您可以在其他框架中看到这些测试。

TEST DURATION
Many reporters will display test duration, as well as flagging tests that are slow, as shown here with the “spec” reporter:

测试持续时间
许多记者将会显示测试持续时间，以及缓慢的测试，如这里所示的“规格”记者:

DIFFS
Mocha supports the err.expected and err.actual properties of any thrown AssertionErrors from an assertion library. Mocha will attempt to display the difference between what was expected, and what the assertion actually saw. Here’s an example of a “string” diff:

差别
Mocha支持犯错。预期,犯错。任何从断言库中抛出的断言错误的实际属性。Mocha将尝试显示所期望的和断言实际看到的差异。这里有一个“string”diff的例子:

INTERFACES
Mocha’s “interface” system allows developers to choose their style of DSL. Mocha has BDD, TDD, Exports, QUnit and Require-style interfaces.

接口
Mocha的“界面”系统允许开发者选择他们的DSL风格。Mocha有BDD、TDD、Exports、QUnit和requirestyle接口。

BDD
The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().

context() is just an alias for describe(), and behaves the same way; it just provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().

BDD
BDD接口提供了describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach()。

context()只是describe()的别名，并且行为相同;它只是提供了一种让测试更容易阅读和组织的方法。类似地，specify()是it()的别名。

TDD
The TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():

EXPORTS
The Exports interface is much like Mocha’s predecessor expresso. The keys before, after, beforeEach, and afterEach are special-cased, object values are suites, and function values are test-cases:

QUNIT
The QUnit-inspired interface matches the “flat” look of QUnit, where the test suite title is simply defined before the test-cases. Like TDD, it uses suite() and test(), but resembling BDD, it also contains before(), after(), beforeEach(), and afterEach().

REQUIRE
The require interface allows you to require the describe and friend words directly using require and call them whatever you want. This interface is also useful if you want to avoid global variables in your tests.

Note: The require interface cannot be run via the node executable, and must be run via mocha.