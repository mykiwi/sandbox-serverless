<?php

require_once(__DIR__.'/vendor/autoload.php');

$links = [
    '/'             => 'Hello world',
    '/?info'        => 'phpinfo()',
    '/?server'      => '$_SERVER',
    '/?packages'    => 'composer.lock',
];
foreach ($links as $link => $label) {
    echo ($link === '/' ? '<center>' : ' - ')."<a href='$link'>$label</a>";
}
echo '</center><hr>';

if (isset($_GET['info'])) {
    phpinfo();
    die;
}

if (isset($_GET['server'])) {
    dd($_SERVER);
}

if (isset($_GET['packages'])) {
    dd(Composer\InstalledVersions::getRawData()['versions']);
}

echo '👋 <b>Hello World</b> from AWS Lambda using a container image & bref<br>'.
     '⏳'.microtime(true);
