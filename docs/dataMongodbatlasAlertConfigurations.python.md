# `dataMongodbatlasAlertConfigurations` Submodule <a name="`dataMongodbatlasAlertConfigurations` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAlertConfigurations <a name="DataMongodbatlasAlertConfigurations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations mongodbatlas_alert_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  list_options: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]] = None,
  output_type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.listOptions">list_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]</code> | list_options block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.outputType">output_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

##### `list_options`<sup>Optional</sup> <a name="list_options" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.listOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]

list_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#list_options DataMongodbatlasAlertConfigurations#list_options}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.outputType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions">put_list_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions">reset_list_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_list_options` <a name="put_list_options" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions"></a>

```python
def put_list_options(
  value: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]

---

##### `reset_list_options` <a name="reset_list_options" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions"></a>

```python
def reset_list_options() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType"></a>

```python
def reset_output_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasAlertConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasAlertConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAlertConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions">list_options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput">list_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput">output_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType">output_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `list_options`<sup>Required</sup> <a name="list_options" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions"></a>

```python
list_options: DataMongodbatlasAlertConfigurationsListOptionsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a>

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results"></a>

```python
results: DataMongodbatlasAlertConfigurationsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `list_options_input`<sup>Optional</sup> <a name="list_options_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput"></a>

```python
list_options_input: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput"></a>

```python
output_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType"></a>

```python
output_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAlertConfigurationsConfig <a name="DataMongodbatlasAlertConfigurationsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  list_options: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]] = None,
  output_type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions">list_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]</code> | list_options block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType">output_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

##### `list_options`<sup>Optional</sup> <a name="list_options" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions"></a>

```python
list_options: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]

list_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#list_options DataMongodbatlasAlertConfigurations#list_options}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType"></a>

```python
output_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}.

---

### DataMongodbatlasAlertConfigurationsListOptions <a name="DataMongodbatlasAlertConfigurationsListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions(
  include_count: typing.Union[bool, IResolvable] = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount">include_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}. |

---

##### `include_count`<sup>Optional</sup> <a name="include_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount"></a>

```python
include_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}.

---

### DataMongodbatlasAlertConfigurationsResults <a name="DataMongodbatlasAlertConfigurationsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults(
  alert_configuration_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

### DataMongodbatlasAlertConfigurationsResultsMatcher <a name="DataMongodbatlasAlertConfigurationsResultsMatcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher()
```


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig()
```


### DataMongodbatlasAlertConfigurationsResultsNotification <a name="DataMongodbatlasAlertConfigurationsResultsNotification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification()
```


### DataMongodbatlasAlertConfigurationsResultsOutput <a name="DataMongodbatlasAlertConfigurationsResultsOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput()
```


### DataMongodbatlasAlertConfigurationsResultsThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAlertConfigurationsListOptionsList <a name="DataMongodbatlasAlertConfigurationsListOptionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsListOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsListOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]]

---


### DataMongodbatlasAlertConfigurationsListOptionsOutputReference <a name="DataMongodbatlasAlertConfigurationsListOptionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount">reset_include_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_count` <a name="reset_include_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount"></a>

```python
def reset_include_count() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum"></a>

```python
def reset_page_num() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput">include_count_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount">include_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_count_input`<sup>Optional</sup> <a name="include_count_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput"></a>

```python
include_count_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_count`<sup>Required</sup> <a name="include_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount"></a>

```python
include_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataMongodbatlasAlertConfigurationsListOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>]

---


### DataMongodbatlasAlertConfigurationsResultsList <a name="DataMongodbatlasAlertConfigurationsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationsResults]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>]]

---


### DataMongodbatlasAlertConfigurationsResultsMatcherList <a name="DataMongodbatlasAlertConfigurationsResultsMatcherList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResultsMatcher
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a>

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a>

---


### DataMongodbatlasAlertConfigurationsResultsNotificationList <a name="DataMongodbatlasAlertConfigurationsResultsNotificationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion">datadog_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin">delay_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled">email_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin">interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber">mobile_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId">notifier_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey">ops_genie_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion">ops_genie_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled">sms_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey">victor_ops_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey">victor_ops_routing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `datadog_api_key`<sup>Required</sup> <a name="datadog_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

---

##### `datadog_region`<sup>Required</sup> <a name="datadog_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

---

##### `delay_min`<sup>Required</sup> <a name="delay_min" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin"></a>

```python
delay_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled"></a>

```python
email_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `interval_min`<sup>Required</sup> <a name="interval_min" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin"></a>

```python
interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `microsoft_teams_webhook_url`<sup>Required</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

---

##### `mobile_number`<sup>Required</sup> <a name="mobile_number" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber"></a>

```python
mobile_number: str
```

- *Type:* str

---

##### `notifier_id`<sup>Required</sup> <a name="notifier_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId"></a>

```python
notifier_id: str
```

- *Type:* str

---

##### `ops_genie_api_key`<sup>Required</sup> <a name="ops_genie_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey"></a>

```python
ops_genie_api_key: str
```

- *Type:* str

---

##### `ops_genie_region`<sup>Required</sup> <a name="ops_genie_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion"></a>

```python
ops_genie_region: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled"></a>

```python
sms_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `victor_ops_api_key`<sup>Required</sup> <a name="victor_ops_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey"></a>

```python
victor_ops_api_key: str
```

- *Type:* str

---

##### `victor_ops_routing_key`<sup>Required</sup> <a name="victor_ops_routing_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey"></a>

```python
victor_ops_routing_key: str
```

- *Type:* str

---

##### `webhook_secret`<sup>Required</sup> <a name="webhook_secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResultsNotification
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputList <a name="DataMongodbatlasAlertConfigurationsResultsOutputList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationsResultsOutputOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResultsOutput
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig">metric_threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig">threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput">alert_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher"></a>

```python
matcher: DataMongodbatlasAlertConfigurationsResultsMatcherList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a>

---

##### `metric_threshold_config`<sup>Required</sup> <a name="metric_threshold_config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig"></a>

```python
metric_threshold_config: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification"></a>

```python
notification: DataMongodbatlasAlertConfigurationsResultsNotificationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output"></a>

```python
output: DataMongodbatlasAlertConfigurationsResultsOutputList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a>

---

##### `threshold_config`<sup>Required</sup> <a name="threshold_config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig"></a>

```python
threshold_config: DataMongodbatlasAlertConfigurationsResultsThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `alert_configuration_id_input`<sup>Optional</sup> <a name="alert_configuration_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput"></a>

```python
alert_configuration_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configurations

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationsResultsThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a>

---



