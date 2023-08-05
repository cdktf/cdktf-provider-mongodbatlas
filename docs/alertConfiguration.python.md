# `mongodbatlas_alert_configuration`

Refer to the Terraform Registory for docs: [`mongodbatlas_alert_configuration`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration).

# `alertConfiguration` Submodule <a name="`alertConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.alertConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertConfiguration <a name="AlertConfiguration" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration mongodbatlas_alert_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_type: str,
  notification: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]],
  project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  matcher: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]] = None,
  metric_threshold: typing.Mapping[str] = None,
  metric_threshold_config: AlertConfigurationMetricThresholdConfig = None,
  threshold: typing.Mapping[str] = None,
  threshold_config: AlertConfigurationThresholdConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#id AlertConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.matcher">matcher</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]</code> | matcher block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThreshold">metric_threshold</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold AlertConfiguration#metric_threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThresholdConfig">metric_threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a></code> | metric_threshold_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.thresholdConfig">threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a></code> | threshold_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#notification AlertConfiguration#notification}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#id AlertConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.matcher"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}

---

##### `metric_threshold`<sup>Optional</sup> <a name="metric_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThreshold"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold AlertConfiguration#metric_threshold}.

---

##### `metric_threshold_config`<sup>Optional</sup> <a name="metric_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThresholdConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>

metric_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.threshold"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `threshold_config`<sup>Optional</sup> <a name="threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.thresholdConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>

threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher">put_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig">put_metric_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig">put_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThreshold">reset_metric_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig">reset_metric_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig">reset_threshold_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_matcher` <a name="put_matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher"></a>

```python
def put_matcher(
  value: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]

---

##### `put_metric_threshold_config` <a name="put_metric_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig"></a>

```python
def put_metric_threshold_config(
  metric_name: str = None,
  mode: str = None,
  operator: str = None,
  threshold: typing.Union[int, float] = None,
  units: str = None
) -> None
```

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#mode AlertConfiguration#mode}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

###### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.units"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]

---

##### `put_threshold_config` <a name="put_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig"></a>

```python
def put_threshold_config(
  operator: str = None,
  threshold: typing.Union[int, float] = None,
  units: str = None
) -> None
```

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

###### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig.parameter.units"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_metric_threshold` <a name="reset_metric_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThreshold"></a>

```python
def reset_metric_threshold() -> None
```

##### `reset_metric_threshold_config` <a name="reset_metric_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig"></a>

```python
def reset_metric_threshold_config() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_threshold_config` <a name="reset_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig"></a>

```python
def reset_threshold_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfiguration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig">metric_threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference">AlertConfigurationMetricThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig">threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference">AlertConfigurationThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput">matcher_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput">metric_threshold_config_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdInput">metric_threshold_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput">threshold_config_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdInput">threshold_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThreshold">metric_threshold</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.threshold">threshold</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher"></a>

```python
matcher: AlertConfigurationMatcherList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a>

---

##### `metric_threshold_config`<sup>Required</sup> <a name="metric_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig"></a>

```python
metric_threshold_config: AlertConfigurationMetricThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference">AlertConfigurationMetricThresholdConfigOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification"></a>

```python
notification: AlertConfigurationNotificationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a>

---

##### `threshold_config`<sup>Required</sup> <a name="threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig"></a>

```python
threshold_config: AlertConfigurationThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference">AlertConfigurationThresholdConfigOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput"></a>

```python
matcher_input: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]

---

##### `metric_threshold_config_input`<sup>Optional</sup> <a name="metric_threshold_config_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput"></a>

```python
metric_threshold_config_input: AlertConfigurationMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>

---

##### `metric_threshold_input`<sup>Optional</sup> <a name="metric_threshold_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdInput"></a>

```python
metric_threshold_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `threshold_config_input`<sup>Optional</sup> <a name="threshold_config_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput"></a>

```python
threshold_config_input: AlertConfigurationThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdInput"></a>

```python
threshold_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_threshold`<sup>Required</sup> <a name="metric_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThreshold"></a>

```python
metric_threshold: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.threshold"></a>

```python
threshold: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConfigurationConfig <a name="AlertConfigurationConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_type: str,
  notification: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]],
  project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  matcher: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]] = None,
  metric_threshold: typing.Mapping[str] = None,
  metric_threshold_config: AlertConfigurationMetricThresholdConfig = None,
  threshold: typing.Mapping[str] = None,
  threshold_config: AlertConfigurationThresholdConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#id AlertConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher">matcher</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]</code> | matcher block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThreshold">metric_threshold</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold AlertConfiguration#metric_threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig">metric_threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a></code> | metric_threshold_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.threshold">threshold</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig">threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a></code> | threshold_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#notification AlertConfiguration#notification}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#id AlertConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher"></a>

```python
matcher: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}

---

##### `metric_threshold`<sup>Optional</sup> <a name="metric_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThreshold"></a>

```python
metric_threshold: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold AlertConfiguration#metric_threshold}.

---

##### `metric_threshold_config`<sup>Optional</sup> <a name="metric_threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig"></a>

```python
metric_threshold_config: AlertConfigurationMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>

metric_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.threshold"></a>

```python
threshold: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `threshold_config`<sup>Optional</sup> <a name="threshold_config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig"></a>

```python
threshold_config: AlertConfigurationThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>

threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}

---

### AlertConfigurationMatcher <a name="AlertConfigurationMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationMatcher(
  field_name: str = None,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#value AlertConfiguration#value}. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#value AlertConfiguration#value}.

---

### AlertConfigurationMetricThresholdConfig <a name="AlertConfigurationMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationMetricThresholdConfig(
  metric_name: str = None,
  mode: str = None,
  operator: str = None,
  threshold: typing.Union[int, float] = None,
  units: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#mode AlertConfiguration#mode}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units">units</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#mode AlertConfiguration#mode}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units"></a>

```python
units: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

### AlertConfigurationNotification <a name="AlertConfigurationNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationNotification(
  api_token: str = None,
  channel_name: str = None,
  datadog_api_key: str = None,
  datadog_region: str = None,
  delay_min: typing.Union[int, float] = None,
  email_address: str = None,
  email_enabled: typing.Union[bool, IResolvable] = None,
  interval_min: typing.Union[int, float] = None,
  microsoft_teams_webhook_url: str = None,
  mobile_number: str = None,
  ops_genie_api_key: str = None,
  ops_genie_region: str = None,
  roles: typing.List[str] = None,
  service_key: str = None,
  sms_enabled: typing.Union[bool, IResolvable] = None,
  team_id: str = None,
  type_name: str = None,
  username: str = None,
  victor_ops_api_key: str = None,
  victor_ops_routing_key: str = None,
  webhook_secret: str = None,
  webhook_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken">api_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion">datadog_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin">delay_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled">email_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin">interval_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber">mobile_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey">ops_genie_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion">ops_genie_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#roles AlertConfiguration#roles}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey">service_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled">sms_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#username AlertConfiguration#username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey">victor_ops_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey">victor_ops_routing_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl">webhook_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}. |

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}.

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}.

---

##### `datadog_api_key`<sup>Optional</sup> <a name="datadog_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}.

---

##### `datadog_region`<sup>Optional</sup> <a name="datadog_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}.

---

##### `delay_min`<sup>Optional</sup> <a name="delay_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin"></a>

```python
delay_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}.

---

##### `email_enabled`<sup>Optional</sup> <a name="email_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled"></a>

```python
email_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}.

---

##### `interval_min`<sup>Optional</sup> <a name="interval_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin"></a>

```python
interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}.

---

##### `microsoft_teams_webhook_url`<sup>Optional</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}.

---

##### `mobile_number`<sup>Optional</sup> <a name="mobile_number" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber"></a>

```python
mobile_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}.

---

##### `ops_genie_api_key`<sup>Optional</sup> <a name="ops_genie_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey"></a>

```python
ops_genie_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}.

---

##### `ops_genie_region`<sup>Optional</sup> <a name="ops_genie_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion"></a>

```python
ops_genie_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#roles AlertConfiguration#roles}.

---

##### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}.

---

##### `sms_enabled`<sup>Optional</sup> <a name="sms_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled"></a>

```python
sms_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#username AlertConfiguration#username}.

---

##### `victor_ops_api_key`<sup>Optional</sup> <a name="victor_ops_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey"></a>

```python
victor_ops_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}.

---

##### `victor_ops_routing_key`<sup>Optional</sup> <a name="victor_ops_routing_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey"></a>

```python
victor_ops_routing_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}.

---

##### `webhook_secret`<sup>Optional</sup> <a name="webhook_secret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}.

---

##### `webhook_url`<sup>Optional</sup> <a name="webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}.

---

### AlertConfigurationThresholdConfig <a name="AlertConfigurationThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationThresholdConfig(
  operator: str = None,
  threshold: typing.Union[int, float] = None,
  units: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units">units</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units"></a>

```python
units: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConfigurationMatcherList <a name="AlertConfigurationMatcherList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationMatcherList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlertConfigurationMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlertConfigurationMatcher]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]]

---


### AlertConfigurationMatcherOutputReference <a name="AlertConfigurationMatcherOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_name` <a name="reset_field_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlertConfigurationMatcher]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>]

---


### AlertConfigurationMetricThresholdConfigOutputReference <a name="AlertConfigurationMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_units` <a name="reset_units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlertConfigurationMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>

---


### AlertConfigurationNotificationList <a name="AlertConfigurationNotificationList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlertConfigurationNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlertConfigurationNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]]

---


### AlertConfigurationNotificationOutputReference <a name="AlertConfigurationNotificationOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey">reset_datadog_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion">reset_datadog_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin">reset_delay_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled">reset_email_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin">reset_interval_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl">reset_microsoft_teams_webhook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber">reset_mobile_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey">reset_ops_genie_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion">reset_ops_genie_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey">reset_service_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled">reset_sms_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId">reset_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey">reset_victor_ops_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey">reset_victor_ops_routing_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret">reset_webhook_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl">reset_webhook_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_token` <a name="reset_api_token" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_datadog_api_key` <a name="reset_datadog_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey"></a>

```python
def reset_datadog_api_key() -> None
```

##### `reset_datadog_region` <a name="reset_datadog_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion"></a>

```python
def reset_datadog_region() -> None
```

##### `reset_delay_min` <a name="reset_delay_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin"></a>

```python
def reset_delay_min() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_email_enabled` <a name="reset_email_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled"></a>

```python
def reset_email_enabled() -> None
```

##### `reset_interval_min` <a name="reset_interval_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin"></a>

```python
def reset_interval_min() -> None
```

##### `reset_microsoft_teams_webhook_url` <a name="reset_microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl"></a>

```python
def reset_microsoft_teams_webhook_url() -> None
```

##### `reset_mobile_number` <a name="reset_mobile_number" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber"></a>

```python
def reset_mobile_number() -> None
```

##### `reset_ops_genie_api_key` <a name="reset_ops_genie_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey"></a>

```python
def reset_ops_genie_api_key() -> None
```

##### `reset_ops_genie_region` <a name="reset_ops_genie_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion"></a>

```python
def reset_ops_genie_region() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_service_key` <a name="reset_service_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey"></a>

```python
def reset_service_key() -> None
```

##### `reset_sms_enabled` <a name="reset_sms_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled"></a>

```python
def reset_sms_enabled() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId"></a>

```python
def reset_team_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_victor_ops_api_key` <a name="reset_victor_ops_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey"></a>

```python
def reset_victor_ops_api_key() -> None
```

##### `reset_victor_ops_routing_key` <a name="reset_victor_ops_routing_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey"></a>

```python
def reset_victor_ops_routing_key() -> None
```

##### `reset_webhook_secret` <a name="reset_webhook_secret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret"></a>

```python
def reset_webhook_secret() -> None
```

##### `reset_webhook_url` <a name="reset_webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl"></a>

```python
def reset_webhook_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput">datadog_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput">datadog_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput">delay_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput">email_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput">interval_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput">microsoft_teams_webhook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput">mobile_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput">ops_genie_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput">ops_genie_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput">service_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput">sms_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput">victor_ops_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput">victor_ops_routing_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput">webhook_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput">webhook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion">datadog_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin">delay_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled">email_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin">interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber">mobile_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey">ops_genie_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion">ops_genie_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled">sms_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey">victor_ops_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey">victor_ops_routing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `datadog_api_key_input`<sup>Optional</sup> <a name="datadog_api_key_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput"></a>

```python
datadog_api_key_input: str
```

- *Type:* str

---

##### `datadog_region_input`<sup>Optional</sup> <a name="datadog_region_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput"></a>

```python
datadog_region_input: str
```

- *Type:* str

---

##### `delay_min_input`<sup>Optional</sup> <a name="delay_min_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput"></a>

```python
delay_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `email_enabled_input`<sup>Optional</sup> <a name="email_enabled_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput"></a>

```python
email_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_min_input`<sup>Optional</sup> <a name="interval_min_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput"></a>

```python
interval_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `microsoft_teams_webhook_url_input`<sup>Optional</sup> <a name="microsoft_teams_webhook_url_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput"></a>

```python
microsoft_teams_webhook_url_input: str
```

- *Type:* str

---

##### `mobile_number_input`<sup>Optional</sup> <a name="mobile_number_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput"></a>

```python
mobile_number_input: str
```

- *Type:* str

---

##### `ops_genie_api_key_input`<sup>Optional</sup> <a name="ops_genie_api_key_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput"></a>

```python
ops_genie_api_key_input: str
```

- *Type:* str

---

##### `ops_genie_region_input`<sup>Optional</sup> <a name="ops_genie_region_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput"></a>

```python
ops_genie_region_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_key_input`<sup>Optional</sup> <a name="service_key_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput"></a>

```python
service_key_input: str
```

- *Type:* str

---

##### `sms_enabled_input`<sup>Optional</sup> <a name="sms_enabled_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput"></a>

```python
sms_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `victor_ops_api_key_input`<sup>Optional</sup> <a name="victor_ops_api_key_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput"></a>

```python
victor_ops_api_key_input: str
```

- *Type:* str

---

##### `victor_ops_routing_key_input`<sup>Optional</sup> <a name="victor_ops_routing_key_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput"></a>

```python
victor_ops_routing_key_input: str
```

- *Type:* str

---

##### `webhook_secret_input`<sup>Optional</sup> <a name="webhook_secret_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput"></a>

```python
webhook_secret_input: str
```

- *Type:* str

---

##### `webhook_url_input`<sup>Optional</sup> <a name="webhook_url_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput"></a>

```python
webhook_url_input: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `datadog_api_key`<sup>Required</sup> <a name="datadog_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

---

##### `datadog_region`<sup>Required</sup> <a name="datadog_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

---

##### `delay_min`<sup>Required</sup> <a name="delay_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin"></a>

```python
delay_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled"></a>

```python
email_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_min`<sup>Required</sup> <a name="interval_min" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin"></a>

```python
interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `microsoft_teams_webhook_url`<sup>Required</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

---

##### `mobile_number`<sup>Required</sup> <a name="mobile_number" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber"></a>

```python
mobile_number: str
```

- *Type:* str

---

##### `ops_genie_api_key`<sup>Required</sup> <a name="ops_genie_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey"></a>

```python
ops_genie_api_key: str
```

- *Type:* str

---

##### `ops_genie_region`<sup>Required</sup> <a name="ops_genie_region" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion"></a>

```python
ops_genie_region: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled"></a>

```python
sms_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `victor_ops_api_key`<sup>Required</sup> <a name="victor_ops_api_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey"></a>

```python
victor_ops_api_key: str
```

- *Type:* str

---

##### `victor_ops_routing_key`<sup>Required</sup> <a name="victor_ops_routing_key" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey"></a>

```python
victor_ops_routing_key: str
```

- *Type:* str

---

##### `webhook_secret`<sup>Required</sup> <a name="webhook_secret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlertConfigurationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>]

---


### AlertConfigurationThresholdConfigOutputReference <a name="AlertConfigurationThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import alert_configuration

alertConfiguration.AlertConfigurationThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_units` <a name="reset_units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlertConfigurationThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>

---



