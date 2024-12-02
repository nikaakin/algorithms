<?php

$start = microtime(true);

for ($i = 0; $i < 10000000; $i++) {
    $a = 1;
}

$finish = microtime(true);

echo "takes: " . ($finish - $start) . " seconds";

// leave this line to have a new line in terminal
echo "\n";
