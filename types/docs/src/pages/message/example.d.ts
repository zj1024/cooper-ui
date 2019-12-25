export declare const basic =
  "import React from 'react'\nimport { Button, Message } from 'cooper-ui'\nexport default () => {\n  const onOpenMessage = () => {\n    Message.$success({ message: '\u6D88\u606F\u63D0\u793A' })\n  }\n  return <Button onClick={onOpenMessage}>\u63D0\u793A</Button>\n}"
export declare const showClose =
  "import React from 'react'\nimport { Button, Message } from 'cooper-ui'\nexport default () => {\n  const onOpenMessage = () => {\n    Message.$success({ message: '\u6D88\u606F\u63D0\u793A', showClose: true })\n  }\n  return <Button onClick={onOpenMessage}>\u63D0\u793A</Button>\n}"
export declare const openBottom =
  "import React from 'react'\nimport { Button, Message } from 'cooper-ui'\nexport default () => {\n  const onOpenMessage = () => {\n    const tips = Message.$success({ message: '\u6D88\u606F\u63D0\u793A', showClose: true, placement: 'bottom', duration: 0 })\n  }\n  return <Button onClick={onOpenMessage}>\u63D0\u793A</Button>\n}"
export declare const fnClose =
  "import React from 'react'\nimport { Button, Message } from 'cooper-ui'\nexport default () => {\n  const onOpenMessage = () => {\n    const tips = Message.$success({ message: '\u6D88\u606F\u63D0\u793A', placement: 'bottom', duration: 0 })\n    setTimeout(() => {\n      tips.close()\n    }, 1500)\n  }\n  return <Button onClick={onOpenMessage}>\u63D0\u793A</Button>\n}"
